import Scorable from './scorable';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class PointOfInterestModel extends Scorable {
  @attr('string') uri;
  @attr('string') label;
  @attr('string') comment;
  @attr('string') commentOnPublicTransport;
  @attr('string') commentOnEntrance;
  @attr('string') locationString;
  @attr('boolean') hasCashPayment;
  @attr('boolean') hasPaymentWithMovableElectronicPaymentSystem;
  @attr('boolean') hasPaymentWithFixedElectronicPaymentSystem;
  @attr('boolean') wifiAlwaysAvailable;
  @attr('boolean') assistanceForGuideDogs;
  @attr('boolean') hasVisualVisitPreparationPlan;
  @attr('boolean') websiteHasScreenreader;
  @attr('boolean') websiteSupportsWcag2;
  @attr('boolean') websiteAllowsTextIncrease;
  @attr('boolean') publicTransportGuidanceAvailable;
  @attr('boolean') websiteHasAccessibleContrast;
  @attr('boolean') websiteHasSignLanguage;
  @attr('boolean') wheelchairAvailable;
  @attr('boolean') hasClearlyRecognizableBuilding;
  @attr('boolean') hasClearlyRecognizableEntrance;
  @attr('boolean') hasVisibleGuidelines;
  @attr('boolean') extraAttentionGivenToAcoustics;
  @attr('boolean') hasAlternativeEntranceForWheelchair;
  @attr('boolean') hasFreeEntranceForGuide;
  @attr('boolean') acceptsMuseumPass;
  @attr('boolean') acceptsUitpas;
  @attr('boolean') acceptsCityPass;
  @attr('boolean') acceptsEdc;
  @hasMany('experience') experiences;
  @hasMany('entrance') entrances;
  @hasMany('parking') parkings;
  @hasMany('toilet') toilets;
  @belongsTo('route-description') publicTransportRouteDescription;
  @belongsTo('restaurant') restaurant;
  @belongsTo('shop') shop;
  @hasMany('train-stop') trainStops;
  @hasMany('bus-stop') busStops;
  @hasMany('tram-stop') tramStops;
  @hasMany('file') files;
  @hasMany('file', { inverse: null }) images;
  @belongsTo('concept') wifiAvailability;
  @belongsTo('concept') typeOfGlassDoorDecoration;
  @hasMany('concept') summaryIcons;
}
