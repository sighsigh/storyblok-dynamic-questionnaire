import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BlockScalar: { input: any; output: any; }
  ISO8601DateTime: { input: any; output: any; }
  JsonScalar: { input: any; output: any; }
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFolder?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['Int']['output']>;
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  content_string?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int']['output'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Greater than float value */
  gt_float?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than integer value */
  gt_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches exactly one value */
  in?: InputMaybe<Scalars['String']['input']>;
  /** Matches any value of given array */
  in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches exactly one integer value */
  in_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches exactly one value with a wildcard search using * */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Less than float value */
  lt_float?: InputMaybe<Scalars['Float']['input']>;
  /** Less than integer value */
  lt_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches all without the given value */
  not_in?: InputMaybe<Scalars['String']['input']>;
  /** Matches all without the given value */
  not_like?: InputMaybe<Scalars['String']['input']>;
};

export type Link = {
  __typename?: 'Link';
  cachedUrl: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fieldtype: Scalars['String']['output'];
  id: Scalars['String']['output'];
  linktype: Scalars['String']['output'];
  story?: Maybe<Story>;
  url: Scalars['String']['output'];
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']['output']>;
  isFolder?: Maybe<Scalars['Boolean']['output']>;
  isStartpage?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  Links?: Maybe<LinkEntries>;
  QuestionnairepageItem?: Maybe<QuestionnairepageItem>;
  QuestionnairepageItems?: Maybe<QuestionnairepageItems>;
  RateLimit?: Maybe<RateLimit>;
  SimplepageItem?: Maybe<SimplepageItem>;
  SimplepageItems?: Maybe<SimplepageItems>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};


export type QueryTypeContentNodeArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource?: InputMaybe<Scalars['String']['input']>;
  dimension?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLinksArgs = {
  paginated?: InputMaybe<Scalars['Boolean']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeQuestionnairepageItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeQuestionnairepageItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<QuestionnairepageFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSimplepageItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeSimplepageItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<SimplepageFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeTagsArgs = {
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionnairepageComponent = {
  __typename?: 'QuestionnairepageComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['JsonScalar']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  next_page?: Maybe<Link>;
  questions?: Maybe<Scalars['BlockScalar']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type QuestionnairepageFilterQuery = {
  identifier?: InputMaybe<FilterQueryOperations>;
  title?: InputMaybe<FilterQueryOperations>;
};

export type QuestionnairepageItem = {
  __typename?: 'QuestionnairepageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<QuestionnairepageComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type QuestionnairepageItems = {
  __typename?: 'QuestionnairepageItems';
  items?: Maybe<Array<Maybe<QuestionnairepageItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type RateLimit = {
  __typename?: 'RateLimit';
  maxCost: Scalars['Int']['output'];
};

export type SimplepageComponent = {
  __typename?: 'SimplepageComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['JsonScalar']['output']>;
  next_page?: Maybe<Link>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SimplepageFilterQuery = {
  title?: InputMaybe<FilterQueryOperations>;
};

export type SimplepageItem = {
  __typename?: 'SimplepageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<SimplepageComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type SimplepageItems = {
  __typename?: 'SimplepageItems';
  items?: Maybe<Array<Maybe<SimplepageItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  languageCodes: Array<Maybe<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type Story = {
  __typename?: 'Story';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  firstPublishedAt?: Maybe<Scalars['String']['output']>;
  fullSlug?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isStartpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  metaData?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  releaseId?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sortByDate?: Maybe<Scalars['String']['output']>;
  tagList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translatedSlugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String']['output'];
  taggingsCount: Scalars['Int']['output'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type SimplePageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type SimplePageQuery = { __typename?: 'QueryType', SimplepageItems?: { __typename?: 'SimplepageItems', items?: Array<{ __typename?: 'SimplepageItem', content?: { __typename?: 'SimplepageComponent', title?: string | null, description?: any | null, next_page?: { __typename?: 'Link', cachedUrl: string } | null } | null } | null> | null } | null };

export type QuestionnairePageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type QuestionnairePageQuery = { __typename?: 'QueryType', QuestionnairepageItems?: { __typename?: 'QuestionnairepageItems', items?: Array<{ __typename?: 'QuestionnairepageItem', content?: { __typename?: 'QuestionnairepageComponent', _uid?: string | null, identifier?: string | null, component?: string | null, questions?: any | null, title?: string | null, description?: any | null, next_page?: { __typename?: 'Link', cachedUrl: string } | null } | null } | null> | null } | null };


export const SimplePageDocument = gql`
    query simplePage($slug: String!) {
  SimplepageItems(by_slugs: $slug) {
    items {
      content {
        title
        description
        next_page {
          cachedUrl
        }
      }
    }
  }
}
    `;

/**
 * __useSimplePageQuery__
 *
 * To run a query within a React component, call `useSimplePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSimplePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSimplePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useSimplePageQuery(baseOptions: Apollo.QueryHookOptions<SimplePageQuery, SimplePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SimplePageQuery, SimplePageQueryVariables>(SimplePageDocument, options);
      }
export function useSimplePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SimplePageQuery, SimplePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SimplePageQuery, SimplePageQueryVariables>(SimplePageDocument, options);
        }
export function useSimplePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SimplePageQuery, SimplePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SimplePageQuery, SimplePageQueryVariables>(SimplePageDocument, options);
        }
export type SimplePageQueryHookResult = ReturnType<typeof useSimplePageQuery>;
export type SimplePageLazyQueryHookResult = ReturnType<typeof useSimplePageLazyQuery>;
export type SimplePageSuspenseQueryHookResult = ReturnType<typeof useSimplePageSuspenseQuery>;
export type SimplePageQueryResult = Apollo.QueryResult<SimplePageQuery, SimplePageQueryVariables>;
export const QuestionnairePageDocument = gql`
    query questionnairePage($slug: String!) {
  QuestionnairepageItems(by_slugs: $slug) {
    items {
      content {
        _uid
        identifier
        component
        questions
        title
        description
        next_page {
          cachedUrl
        }
      }
    }
  }
}
    `;

/**
 * __useQuestionnairePageQuery__
 *
 * To run a query within a React component, call `useQuestionnairePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionnairePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionnairePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useQuestionnairePageQuery(baseOptions: Apollo.QueryHookOptions<QuestionnairePageQuery, QuestionnairePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestionnairePageQuery, QuestionnairePageQueryVariables>(QuestionnairePageDocument, options);
      }
export function useQuestionnairePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionnairePageQuery, QuestionnairePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestionnairePageQuery, QuestionnairePageQueryVariables>(QuestionnairePageDocument, options);
        }
export function useQuestionnairePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QuestionnairePageQuery, QuestionnairePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QuestionnairePageQuery, QuestionnairePageQueryVariables>(QuestionnairePageDocument, options);
        }
export type QuestionnairePageQueryHookResult = ReturnType<typeof useQuestionnairePageQuery>;
export type QuestionnairePageLazyQueryHookResult = ReturnType<typeof useQuestionnairePageLazyQuery>;
export type QuestionnairePageSuspenseQueryHookResult = ReturnType<typeof useQuestionnairePageSuspenseQuery>;
export type QuestionnairePageQueryResult = Apollo.QueryResult<QuestionnairePageQuery, QuestionnairePageQueryVariables>;