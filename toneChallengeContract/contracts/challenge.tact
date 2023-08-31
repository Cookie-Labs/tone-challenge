import "@stdlib/deploy";
import "@stdlib/ownable";

contract Challenge with Deployable, Ownable {

    id: Int;
    owner: Address;
    factory: Address;
    participants: map<Int, Address>;
    certification: map<Address, Int>;
    successUser: map<Int, Address>;
    length: Int;
    standard: Int;

    init(
        id: Int,
        owner: Address, 
        factory: Address,
        standard: Int
    ) {
        self.id = id;
        self.owner = owner;
        self.factory = factory;
        self.length = 0;
        self.standard = standard;
    }

    receive ("add participant") {
        self.addParticipant();
    }

    receive ("finish") {
        let count: Int = 0;
        let totalBalance: Int = myBalance();
        let successCount: Int = 0;

        repeat(self.length) {
            let address: Address = self.participants.get(count)!!;
            let total: Int = self.certification.get(address)!!;
            if (total >= self.standard) {
                self.successUser.set(successCount, address);
                successCount = successCount + 1;
            }
            count = count + 1;
        }

        self.transfer(successCount, totalBalance / self.length);
    }

    fun transfer(totalCount: Int, value: Int) {
        let count: Int = 0;
        repeat(totalCount) {
            let address: Address = self.successUser.get(count)!!;
            send(SendParameters{
                to: sender(),
                bounce: true,
                value: value,
                mode: SendRemainingValue + SendIgnoreErrors
            });
        }
    }

    fun addParticipant() {
        self.certification.set(sender(), 0);
        self.participants.set(self.length, sender());
        self.length = self.length + 1;
    }

    get fun balance(): Int {
        return myBalance();
    }

    get fun certificationCountByUser(user: Address): Int {
        require (self.certification.get(user) != null, "unexist user");
        return self.certification.get(user)!!;
    }

    get fun allParticipants(): map<Int, Address> {
        return self.participants;
    }

    get fun isSuccess(user: Address): Bool {
        let count: Int? = self.certification.get(user);
        if (count == null) {
            return false;
        } else if (count!! >= self.standard) {
            return true;
        } else {
            return false;
        }
    }

}
