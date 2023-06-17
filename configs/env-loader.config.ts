import { config as dotenvConfig } from 'dotenv';
import { join } from 'node:path/posix';

export function loadEnvironmentVariables(filePath: string) {
  console.log(join(__dirname, '..', '..', '/', filePath));
  const result = dotenvConfig({
    path: join(__dirname, '..', '..', '/', filePath),
  });

  console.log('env-resutl', result);

  if (result.error) {
    throw result.error;
  }
}
