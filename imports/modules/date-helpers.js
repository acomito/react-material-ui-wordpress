import 'meteor/momentjs:moment';


export const formatDate = (date) => {
  	const thisMoment = moment.utc(date).format("MM/DD/YYYY");
    return thisMoment;
};