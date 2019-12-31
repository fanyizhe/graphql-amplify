/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTalk = `mutation CreateTalk(
  $input: CreateTalkInput!
  $condition: ModelTalkConditionInput
) {
  createTalk(input: $input, condition: $condition) {
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
export const updateTalk = `mutation UpdateTalk(
  $input: UpdateTalkInput!
  $condition: ModelTalkConditionInput
) {
  updateTalk(input: $input, condition: $condition) {
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
export const deleteTalk = `mutation DeleteTalk(
  $input: DeleteTalkInput!
  $condition: ModelTalkConditionInput
) {
  deleteTalk(input: $input, condition: $condition) {
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
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
