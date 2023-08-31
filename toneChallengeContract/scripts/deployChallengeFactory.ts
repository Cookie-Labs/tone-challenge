import { toNano } from 'ton-core';
import { ChallengeFactory } from '../wrappers/ChallengeFactory';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const challengeFactory = provider.open(await ChallengeFactory.fromInit());

    await challengeFactory.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(challengeFactory.address);

    // run methods on `challengeFactory`
}
