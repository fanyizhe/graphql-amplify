/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoins = `query GetCoins($limit: Int, $start: Int) {
  getCoins(limit: $limit, start: $start) {
    id
    name
    symbol
    price_usd
  }
}
`;
export const getTalk = `query GetTalk($id: ID!) {
  getTalk(id: $id) {
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
export const listTalks = `query ListTalks(
  $filter: ModelTalkFilterInput
  $limit: Int
  $nextToken: String
) {
  listTalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      clientId
      name
      description
      speakerName
      speakerBio
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      createdBy
    }
    nextToken
  }
}
`;
