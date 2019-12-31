/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTalk = `subscription OnCreateTalk {
  onCreateTalk {
    id
    clientId
    name
    description
    speakerName
    speakerBio
    comments {
      nextToken
    }
  }
}
`;
export const onUpdateTalk = `subscription OnUpdateTalk {
  onUpdateTalk {
    id
    clientId
    name
    description
    speakerName
    speakerBio
    comments {
      nextToken
    }
  }
}
`;
export const onDeleteTalk = `subscription OnDeleteTalk {
  onDeleteTalk {
    id
    clientId
    name
    description
    speakerName
    speakerBio
    comments {
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment($createdBy: String!) {
  onCreateComment(createdBy: $createdBy) {
    id
    message
    createdBy
    talk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment($createdBy: String!) {
  onUpdateComment(createdBy: $createdBy) {
    id
    message
    createdBy
    talk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment($createdBy: String!) {
  onDeleteComment(createdBy: $createdBy) {
    id
    message
    createdBy
    talk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
    }
  }
}
`;
