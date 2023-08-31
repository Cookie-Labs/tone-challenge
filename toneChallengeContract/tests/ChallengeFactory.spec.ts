import { Blockchain, SandboxContract, Treasury, TreasuryContract } from '@ton-community/sandbox';
import { Address, toNano } from 'ton-core';
import { ChallengeFactory } from '../wrappers/ChallengeFactory';
import { Challenge } from '../wrappers/Challenge';
import '@ton-community/test-utils';

describe('ChallengeFactory', () => {
    let blockchain: Blockchain;
    let challenge: SandboxContract<Challenge>;
    let challengeFactory: SandboxContract<ChallengeFactory>;

    let deployer1: SandboxContract<TreasuryContract>;
    let deployer2: SandboxContract<TreasuryContract>;
    let deployer3: SandboxContract<TreasuryContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        challengeFactory = blockchain.openContract(await ChallengeFactory.fromInit());

        deployer1 = await blockchain.treasury('deployer1');
        deployer2 = await blockchain.treasury('deployer2');
        deployer3 = await blockchain.treasury('deployer3');

        const deployResult = await challengeFactory.send(
            deployer1.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer1.address,
            to: challengeFactory.address,
            deploy: true,
            success: true,
        });
    });

    it('should 1', async () => {
        await challengeFactory.send(deployer1.getSender(), { value: toNano('0.05') }, 'create challenge');
        await challengeFactory.send(deployer1.getSender(), { value: toNano('0.05') }, 'create challenge');
        console.log(await challengeFactory.getAllChallenges());
        // console.log(await challengeFactory.getLength());
        // console.log(await challengeFactory.getBalance());
        challenge = blockchain.openContract(
            Challenge.fromAddress(Address.parse('EQBqKGdPh-JnGPK5Y8O9rFj-D6oLHVB7ISFU1nW3w8mcCmus'))
        );
        await challenge.send(deployer2.getSender(), { value: toNano('0.05') }, 'add participant');
        await challenge.send(deployer3.getSender(), { value: toNano('0.05') }, 'add participant');
        console.log(await challenge.getAllParticipants());
    });

    // it('should 1', async () => {
    //     const q1 = await challengeFactory.send(deployer1.getSender(), { value: toNano('0.05') }, 'create challenge');
    //     const q2 = await challengeFactory.send(deployer1.getSender(), { value: toNano('0.05') }, 'create challenge');
    //     Promise.all([q1, q2]).then(() => challengeFactory.getLength().then((res) => console.log(res)));
    // });

    it('should 2', async () => {});
});
