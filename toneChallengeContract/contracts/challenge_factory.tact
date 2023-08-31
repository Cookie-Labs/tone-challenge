import "@stdlib/deploy";
import "@stdlib/ownable";
import "./challenge.tact";

contract ChallengeFactory with Deployable, OwnableTransferable {

    owner: Address;
    challenges: map<Int, Address>;
    challengeLength: Int;

    init() {
        self.owner = sender();
        self.challengeLength = 0;
    }

    receive("initial") {}

    receive("create challenge") {
        let challengeInit: StateInit = self.challengeInit(self.challengeLength);
        let deployAddress: Address = contractAddress(challengeInit);
        let msgValue: Int = context().value;

        send(SendParameters{
            to: deployAddress,
            value: msgValue,
            body: "add participant".asComment(),
            code: challengeInit.code,
            data: challengeInit.data
        });

        self.challengeLength = self.challengeLength + 1;
        self.challenges.set(self.challengeLength, deployAddress);
    }

    get fun challengeInit(index: Int): StateInit {
        return initOf Challenge(index, sender(), myAddress(), 30);
    }

    get fun length(): Int {
        return self.challengeLength;
    }

    get fun balance(): Int {
        return myBalance();
    }

    get fun challenge(index: Int): Address {
        require (self.challenges.get(index) != null, "not found");
        return self.challenges.get(index)!!;
    }

    get fun allChallenges(): map<Int, Address> {
        return self.challenges;
    }

}