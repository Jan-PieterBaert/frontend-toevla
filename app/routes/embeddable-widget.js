import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { museaTree } from 'frontend-toevla/utils/uris/concept-schemes';

export default class EmbeddableWidgetRoute extends Route {
  @service store;
  @service nodeScoreStateManager;

  async model({widget_uri}) {
    const widgets =
      await this.store.query("widget",
        {
          include: "point-of-interest.summary-icons",
          "filter[:uri:]": widget_uri
        });
    const widget = widgets.firstObject;
    const tree =
      (await this
        .store
        .query("concept-scheme",
          {
            "include": "top-level-nodes.children.children.children.children.children",
            "filter[:uri:]": museaTree
          }))
        .firstObject;

    const poi = (await this.store.query('point-of-interest',
      {
        "filter[:id:]": (await widget.pointOfInterest).id, // Fetched above
        include: "images,experiences,toilets,experiences.circulation,public-transport-route-description,shop,restaurant,bus-stops,parkings,entrances,type-of-glass-door-decoration,experiences.guided-tour,tram-stops,experiences.auditorium,train-stops"
      })).firstObject;

    window.setTimeout(async () => {
      await this.nodeScoreStateManager.fetchAllForPoi(poi);
      await this.store.query("concept-scheme", {
        "include": "top-level-nodes.children.children.children.children.children",
        "filter[:uri:]": museaTree
      });
    }, 1250);

    return {
      poi,
      widget,
      tree
    };
  }
}
