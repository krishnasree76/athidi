import { execSync } from 'child_process';
try {
  execSync('npx tsc --noEmit', { encoding: 'utf8' });
  console.log("Success");
} catch (e) {
  console.log(e.stdout.toString());
}
