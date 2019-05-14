import Server from './server';

class API extends Server {
  github = 'https://api.github.com';

  async listRepos() {
    try {
      let result = await this.axios('get', '/orgs/AlphaTac-AI/repos', this.github, {});
      return result || [];
    } catch (err) {
      throw err;
    }
  }

  async listContributors(repo) {
    try {
      let result = await this.axios('get', `/repos/AlphaTac-AI/${repo}/contributors`, this.github, {});
      return result || [];
    } catch (err) {
      throw err;
    }
  }
}

export default new API();