
const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
      
      apiKey: "9B1PUuRZU5szyFE6HZGRHi19f03aWIql",
      nodes: [
        {
          host: "typesense.acdh-dev.oeaw.ac.at",
          port: "443",
          protocol: "https",
        }
      
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
              <h4><a href="{{ id }}">{{ edition-name }}</a></h4>
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


instantsearch.widgets.refinementList({
    container: '#refinement-language',
    attribute: 'language',
    searchable: true,
    searchablePlaceholder: 'Search  Language',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-writing-support',
    attribute: 'writing-support',
    searchable: true,
    searchablePlaceholder: 'Search  Writing support',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-manager-or-editor',
    attribute: 'manager-or-editor',
    searchable: true,
    searchablePlaceholder: 'Search  Manager or Editor',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-institution-s',
    attribute: 'institution-s',
    searchable: true,
    searchablePlaceholder: 'Search  Institution(s)',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-audience',
    attribute: 'audience',
    searchable: true,
    searchablePlaceholder: 'Search  Audience',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-source-text-translation',
    attribute: 'source-text-translation',
    searchable: true,
    searchablePlaceholder: 'Search  Source Text Translation',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-ocr-or-keyed',
    attribute: 'ocr-or-keyed',
    searchable: true,
    searchablePlaceholder: 'Search  OCR or keyed?',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-repository-of-source-material-s',
    attribute: 'repository-of-source-material-s',
    searchable: true,
    searchablePlaceholder: 'Search  Repository of source material(s)',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-place-of-origin-of-source-material-s',
    attribute: 'place-of-origin-of-source-material-s',
    searchable: true,
    searchablePlaceholder: 'Search  Place of origin of source material(s)',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-sponsor-funding-body',
    attribute: 'sponsor-funding-body',
    searchable: true,
    searchablePlaceholder: 'Search  Sponsor/Funding body',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),

instantsearch.widgets.refinementList({
    container: '#refinement-infrastructure',
    attribute: 'infrastructure',
    searchable: true,
    searchablePlaceholder: 'Search  Infrastructure',
    cssClasses: {
      searchableInput: 'form-control form-control-sm mb-2 border-light-2',
      searchableSubmit: 'd-none',
      searchableReset: 'd-none',
      showMore: 'btn btn-secondary btn-sm align-content-center',
      list: 'list-unstyled',
      count: 'badge ms-2 bg-info',
      label: 'd-flex align-items-center',
      labelText: 'ms-2',
      checkbox: 'ms-2',
    }
}),


    instantsearch.widgets.currentRefinements({
      container: '#current-refinements',
      cssClasses: {
        delete: 'btn',
        label: 'badge'
      }
    }),

]);



search.addWidgets([
    instantsearch.widgets.configure({
        attributesToSnippet: ['edition-title'],
        hitsPerPage: 25,
    })
]);


search.start();
