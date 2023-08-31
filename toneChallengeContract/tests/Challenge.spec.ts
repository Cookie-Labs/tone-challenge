import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { Challenge } from '../wrappers/Challenge';
import '@ton-community/test-utils';

describe('Challenge', () => {
    let blockchain: Blockchain;
    let challenge: SandboxContract<Challenge>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        challenge = blockchain.openContract(await Challenge.fromInit());

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await challenge.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: challenge.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and challenge are ready to use
    });
});
