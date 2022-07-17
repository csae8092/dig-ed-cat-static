const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
      apiKey: "9B1PUuRZU5szyFE6HZGRHi19f03aWIql", //production
      // apiKey: "E8XSLzaDIMQXUSCOyUDY2F2VwHbZ32JU", //dev
      nodes: [
        {
          host: "typesense.acdh-dev.oeaw.ac.at",
          port: "443",
          protocol: "https",
        },
      ],
      cacheSearchResultsForSeconds: 2 * 60,
    },
    additionalSearchParameters: {
      query_by: "edition-name"
    },
  });


const searchClient = typesenseInstantsearchAdapter.searchClient;
const search = instantsearch({
    indexName: 'dig-ed-cat',
    searchClient,
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchbox',
        autofocus: true,
        cssClasses: {
          form: 'form-inline',
          input: 'form-control col-md-11',
          submit: 'btn',
          reset: 'btn'
        },
    }),

    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: 'No Hits',
          item: `
              <h4><a href="entry-{{ id }}.html">{{ edition-name }}</a></h4>
              <h5><a href="{{ url }}"><span class="badge bg-primary">{{ project }}</span></a></h5>
              <div>
              {{#language}}
              <span class="badge bg-secondary">{{ . }}</span>
              {{/language}}
              </div>
              {{#audience}}
              <span class="badge bg-success">{{ . }}</span>
              {{/audience}}
              <div>
              </div>
              </div>
          `
      }
    }),

    instantsearch.widgets.stats({
      container: '#stats-container'
  }),

    instantsearch.widgets.refinementList({
        container: '#refinement-language',
        attribute: 'language',
        searchable: true,
        searchablePlaceholder: 'Search',
        cssClasses: {
          searchableInput: 'form-control form-control-sm mb-2 border-light-2',
          searchableSubmit: 'd-none',
          searchableReset: 'd-none',
          showMore: 'btn btn-secondary btn-sm align-content-center',
          list: 'list-unstyled',
          count: 'badge ml-2 bg-info',
          label: 'd-flex align-items-center text-capitalize',
          checkbox: 'mr-2',
        }
    }),

    instantsearch.widgets.refinementList({
        container: '#refinement-audience',
        attribute: 'audience',
        searchable: true,
        searchablePlaceholder: 'Search',
        cssClasses: {
          searchableInput: 'form-control form-control-sm mb-2 border-light-2',
          searchableSubmit: 'd-none',
          searchableReset: 'd-none',
          showMore: 'btn btn-secondary btn-sm align-content-center',
          list: 'list-unstyled',
          count: 'badge ml-2 bg-success',
          label: 'd-flex align-items-center text-capitalize',
          checkbox: 'mr-2',
        }
    }),
    

    instantsearch.widgets.pagination({
        container: '#pagination',
        padding: 2,
        cssClasses: {
          list: 'pagination',
          item: 'page-item',
          link: 'page-link'
        }
    }),
    instantsearch.widgets.clearRefinements({
        container: '#clear-refinements',
        templates: {
          resetLabel: 'Filter zurücksetzen',
        },
        cssClasses: {
          button: 'btn'
        }
    }),

    	

    instantsearch.widgets.currentRefinements({
      container: '#current-refinements',
      cssClasses: {
        delete: 'btn',
        label: 'badge'
      }
    })
]);



search.addWidgets([
    instantsearch.widgets.configure({
        attributesToSnippet: ['edition-title'],
    })
]);


search.start();