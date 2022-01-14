// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.11;


contract Inbox {
    string public message;

  /**A constructor*/
    constructor(string memory _message) public {
        message = _message;
    }

    function setMessage(string memory _message)
    public
    {
        message = _message
    }
}
