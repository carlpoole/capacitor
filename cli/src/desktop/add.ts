import { pathExists, writeFile } from '@ionic/utils-fs';
import { homedir } from 'os';
import { join } from 'path';

import c from '../colors';
import { runTask } from '../common';
import type { Config } from '../definitions';
import { runCommand } from '../util/subprocess';
import { extractTemplate } from '../util/template';

export async function addDesktop(config: Config): Promise<void> {
  await runTask(
    `Adding desktop project in ${c.strong(config.desktop.platformDir)}`,
    async () => {
      return extractTemplate(
        config.cli.assets.desktop.platformTemplateArchiveAbs,
        config.desktop.platformDirAbs,
      );
    },
  );
}
