import { toNano } from 'ton-core';
import { Challenge } from '../wrappers/Challenge';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const challenge = provider.open(await Challenge.fromInit());

    await challenge.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(challenge.address);

    // run methods on `challenge`
}
