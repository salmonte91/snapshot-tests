import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard'

test('render a snapshot', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot()
  })