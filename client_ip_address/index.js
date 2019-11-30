/**
 * Check the IP address of of client. To run this functions, you can simple do -
 * $ npm start
 *
 * (You must run this from this directory)
 *
 * @function client_ip_address
 *
 * @author Shaharia Azam <mail@shaharia.com>
 * @URI https://github.com/shahariaazam
 *
 * @license MIT
 */

/**
 * Adding this ipware package because we try to be DRY as much as possible and keep the functions simple. It supports both IPv4 and IPv6.
 * `npm install ipware`
 *
 * @type {function(*=, *): ({clientIp: *, clientIpRoutable: *})}
 */
var get_ip = require('ipware')().get_ip;

/**
 * Executing client_ip_address
 *
 * @param req
 * @param res
 */
exports.client_ip_address = (req, res) => {
    var ip_info = get_ip(req);
    res.send({ip: ip_info.clientIp});
};