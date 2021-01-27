import Debug from 'debug';
import { resolve } from 'path';

import c from '../colors';
import { promptForPlatformTarget, runTask } from '../common';
import type { Config } from '../definitions';
import type { RunCommandOptions } from '../tasks/run';
import { runNativeRun, getPlatformTargets } from '../util/native-run';
import { runCommand } from '../util/subprocess';

const debug = Debug('capacitor:desktop:run');

export async function runDesktop(
  config: Config,
  { target: selectedTarget }: RunCommandOptions,
): Promise<void> {
  const args: readonly string[] = [];

  debug('Running ./CapacitorDesktop with args: %O', args);

  await runTask('Running Capacitor Desktop', async () =>
    runCommand('./CapacitorDesktop', args, {
      cwd: config.desktop.platformDirAbs,
    }),
  );
}
