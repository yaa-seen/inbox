// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.4.26;


contract Inbox {
    string public message;

  /**A constructor*/
    constructor(string memory initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string memory newMessage)
    public
    {
        message = newMessage;
    }
}
