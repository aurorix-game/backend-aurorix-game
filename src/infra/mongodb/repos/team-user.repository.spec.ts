import { makeTeamUser, makeTeamUsers } from '@domain/fakers';
import { TeamUser } from '@domain/models';
import { MongodbAdapter } from '@infra/adapters';
import { TeamUserRepository } from '@infra/mongodb/repos';
import { mock, MockProxy } from 'jest-mock-extended';

describe(TeamUserRepository, () => {
  let sut: TeamUserRepository;
  let databaseAdapter: MockProxy<MongodbAdapter<TeamUser>>;

  beforeEach(() => {
    databaseAdapter = mock<MongodbAdapter<TeamUser>>();
    sut = new TeamUserRepository(databaseAdapter);
  });

  describe('Create Team User', () => {
    it('should be create a team user tracking', async () => {
      const mock = makeTeamUser();
      databaseAdapter.create.mockResolvedValueOnce(mock);

      const teamUser = await sut.create(mock);

      expect(teamUser).toEqual(mock);
      expect(databaseAdapter.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('List Team Users', () => {
    it('should be create a team user tracking', async () => {
      const mock = makeTeamUsers(5);
      databaseAdapter.list.mockResolvedValueOnce(mock);

      const teamUser = await sut.list({ filter: { team_id: 'any_team_id' } });

      expect(teamUser).toEqual(mock);
      expect(databaseAdapter.list).toHaveBeenCalledTimes(1);
    });
  });
});
