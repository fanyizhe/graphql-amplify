import React from 'react';
import logo from './logo.svg';
import './App.css';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { listTalks as ListTalks} from './graphql/queries'
import uuid from 'uuid/v4'
import { createTalk as CreateTalk } from './graphql/mutations'
import { withAuthenticator } from 'aws-amplify-react'

const CLIENT_ID = uuid()

class App extends React.Component {

  state = {
    name: '',
    description: '',
    speakerName: '',
    speakerBio: '',
    talk: []
  }

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user:', user)
    console.log('user info:', user.signInUserSession.idToken.payload)
    try {
      const talkData = await API.graphql(graphqlOperation(ListTalks))
      console.log('talkData:',talkData)
      this.setState({
        talks: talkData.data.listTalks.items
      })
    }catch(err) {
      console.log('error fetching talk...'. err)
    }
  }

  createTalk = async() => {
    const { name, description, speakerName, speakerBio } = this.state;
    if (name == '' || description == '' || speakerBio == '' || speakerName == '') return

    const talk = { name, description, speakerBio, speakerName, clientId: CLIENT_ID}
    const talks = [...this.state.talks, talk]
    this.setState({
      talks, name:'', description: '', speakerName: '', speakerBio: ''
    })

    try {
      await API.graphql(graphqlOperation(CreateTalk, {input: talk}))
      console.log('item created')

    } catch (err) {
      console.log('error creating talk...', err)
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
        <input 
          name='name'
          onChange = {this.onChange}
          value={this.state.name}
          placeholder='name'
        />
        <input 
          name='description'
          onChange = {this.onChange}
          value={this.state.description}
          placeholder='description'
        />
        <input 
          name='speakerBio'
          onChange = {this.onChange}
          value={this.state.speakerBio}
          placeholder='speakerBio'
        />
        <input 
          name='speakerName'
          onChange = {this.onChange}
          value={this.state.speakerName}
          placeholder='speakerName'
        />
        <button onClick={this.createTalk}>Create Talk</button>
        {
          this.state.talk.map((talk, index) => (
            <div key={index}>
              <h3>{talk.speakerName}</h3>
              <h5>{talk.name}</h5>
              <p>{talk.description}</p>
            </div>
          ))
        }
      </>
    )
  }
}

export default withAuthenticator(App, {includeGreeting: true});
