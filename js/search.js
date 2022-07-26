
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
    container: '#refinement-historical-period',
    attribute: 'historical-period',
    searchable: true,
    searchablePlaceholder: 'Search  Historical Period',
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
    container: '#refinement-time-century',
    attribute: 'time-century',
    searchable: true,
    searchablePlaceholder: 'Search  Time/Century',
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
    container: '#refinement-scholarly',
    attribute: 'scholarly',
    searchable: true,
    searchablePlaceholder: 'Search  Scholarly',
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
    container: '#refinement-digital',
    attribute: 'digital',
    searchable: true,
    searchablePlaceholder: 'Search  Digital',
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
    container: '#refinement-edition',
    attribute: 'edition',
    searchable: true,
    searchablePlaceholder: 'Search  Edition',
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
    container: '#refinement-begin-date',
    attribute: 'begin-date',
    searchable: true,
    searchablePlaceholder: 'Search  Begin date',
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
    container: '#refinement-end-date',
    attribute: 'end-date',
    searchable: true,
    searchablePlaceholder: 'Search  End date',
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
    container: '#refinement-philological-statement',
    attribute: 'philological-statement',
    searchable: true,
    searchablePlaceholder: 'Search  Philological statement',
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
    container: '#refinement-account-of-textual-variance',
    attribute: 'account-of-textual-variance',
    searchable: true,
    searchablePlaceholder: 'Search  Account of textual variance',
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
    container: '#refinement-value-of-witnesses',
    attribute: 'value-of-witnesses',
    searchable: true,
    searchablePlaceholder: 'Search  Value of witnesses',
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
    container: '#refinement-xml-tei-transcription',
    attribute: 'xml-tei-transcription',
    searchable: true,
    searchablePlaceholder: 'Search  XML-TEI Transcription',
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
    container: '#refinement-xml-tei-available-to-download',
    attribute: 'xml-tei-available-to-download',
    searchable: true,
    searchablePlaceholder: 'Search  XML(-TEI) available to download',
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
    container: '#refinement-images',
    attribute: 'images',
    searchable: true,
    searchablePlaceholder: 'Search  Images',
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
    container: '#refinement-zoom-images',
    attribute: 'zoom-images',
    searchable: true,
    searchablePlaceholder: 'Search  Zoom images',
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
    container: '#refinement-image-manipulation-brightness-rotation-etc',
    attribute: 'image-manipulation-brightness-rotation-etc',
    searchable: true,
    searchablePlaceholder: 'Search  Image manipulation (brightness, rotation, etc.)',
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
    container: '#refinement-text-image-linking',
    attribute: 'text-image-linking',
    searchable: true,
    searchablePlaceholder: 'Search  Text-Image Linking',
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
    container: '#refinement-website-language',
    attribute: 'website-language',
    searchable: true,
    searchablePlaceholder: 'Search  Website language',
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
    container: '#refinement-glossary',
    attribute: 'glossary',
    searchable: true,
    searchablePlaceholder: 'Search  Glossary',
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
    container: '#refinement-indices',
    attribute: 'indices',
    searchable: true,
    searchablePlaceholder: 'Search  Indices',
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
    container: '#refinement-string-matching',
    attribute: 'string-matching',
    searchable: true,
    searchablePlaceholder: 'Search  String matching',
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
    container: '#refinement-advanced-search',
    attribute: 'advanced-search',
    searchable: true,
    searchablePlaceholder: 'Search  Advanced search',
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
    container: '#refinement-creative-commons-license',
    attribute: 'creative-commons-license',
    searchable: true,
    searchablePlaceholder: 'Search  Creative Commons License',
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
    container: '#refinement-open-source-open-access',
    attribute: 'open-source-open-access',
    searchable: true,
    searchablePlaceholder: 'Search  Open source/Open access',
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
    container: '#refinement-linked-open-data',
    attribute: 'linked-open-data',
    searchable: true,
    searchablePlaceholder: 'Search  Linked Open Data',
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
    container: '#refinement-api',
    attribute: 'api',
    searchable: true,
    searchablePlaceholder: 'Search  API',
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
    container: '#refinement-crowdsourcing',
    attribute: 'crowdsourcing',
    searchable: true,
    searchablePlaceholder: 'Search  Crowdsourcing',
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
    container: '#refinement-feedback',
    attribute: 'feedback',
    searchable: true,
    searchablePlaceholder: 'Search  Feedback',
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
    container: '#refinement-technological-statement',
    attribute: 'technological-statement',
    searchable: true,
    searchablePlaceholder: 'Search  Technological statement',
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
    container: '#refinement-links-to-ext-resources',
    attribute: 'links-to-ext-resources',
    searchable: true,
    searchablePlaceholder: 'Search  Links to ext. resources',
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
    container: '#refinement-mobile-friendly-application',
    attribute: 'mobile-friendly-application',
    searchable: true,
    searchablePlaceholder: 'Search  Mobile friendly/application',
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
    container: '#refinement-print-friendly-view',
    attribute: 'print-friendly-view',
    searchable: true,
    searchablePlaceholder: 'Search  Print-friendly view',
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
    container: '#refinement-print-facsimile-complementary-output',
    attribute: 'print-facsimile-complementary-output',
    searchable: true,
    searchablePlaceholder: 'Search  Print facsimile (complementary output)',
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

instantsearch.widgets.refinementList({
    container: '#refinement-current-availability',
    attribute: 'current-availability',
    searchable: true,
    searchablePlaceholder: 'Search  Current availability',
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
    container: '#refinement-sahle-catalog',
    attribute: 'sahle-catalog',
    searchable: true,
    searchablePlaceholder: 'Search  Sahle Catalog',
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
    container: '#refinement-citation',
    attribute: 'citation',
    searchable: true,
    searchablePlaceholder: 'Search  Citation',
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
