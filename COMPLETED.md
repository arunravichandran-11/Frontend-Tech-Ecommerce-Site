Refactored List:

1. Code/Folder Structure
2. Introduced redux to store the product list. It may not be necessary for now, but as the application grows, depends on the component communication, we might require it.
3. Added React Router 6 to create dynamic routes for all categories. This is temporary, if going for Server Side Rendering this will be refactored.
4. components are separated into two
   a) core - Generic UI components, created separately without any dependency other than @emotion/styled with an intension that can be used in separate Design System Library.
   b) shared - Application Specific, eg: Article Card can be used in product list page, as well as Wishlist/ Cart in future.
5. HttpClient class is built as an instance of axios and which will be used in API. Later if axios has to be replaced with Fetch or any other library or native, we can change only in helper folder/httpClient file, rather than looking for whole application.
6. types.ts is used with Redux and components.

NOTE:
I commented the cache in server.ts in order to fetch the results of articles on click of each and every sub categories on the side navigation
