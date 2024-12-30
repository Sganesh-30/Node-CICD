const { execSync } = require('child_process');

describe('Integration Tests for app.js', () => {
  test('Should add a new note successfully', () => {
    const command = 'node app.js add --title="Test Title" --body="Test Body"';
    const output = execSync(command).toString();
    expect(output).toContain('adding note');
  });

  test('Should list all notes', () => {
    const command = 'node app.js list';
    const output = execSync(command).toString();
    expect(output).toContain('listing all notes');
  });

  test('Should read a specific note', () => {
    const command = 'node app.js read --title="Test Title"';
    const output = execSync(command).toString();
    expect(output).toContain('reading note');
  });

  test('Should remove a specific note', () => {
    const command = 'node app.js remove --title="Test Title"';
    const output = execSync(command).toString();
    expect(output).toContain('removing note');
  });

  test('Should display an error for unknown commands', () => {
    const command = 'node app.js unknown';
    const output = execSync(command).toString();
    expect(output).toContain('Unknown command was used!');
  });
});
