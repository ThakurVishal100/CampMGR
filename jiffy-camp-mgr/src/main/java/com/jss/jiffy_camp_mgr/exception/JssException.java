package com.jss.jiffy_camp_mgr.exception;

public class JssException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	String exceptionCode;
	String exceptionMessage;
	
	public JssException() {}
	public JssException(String code,String msg) {
		this.exceptionCode=code;
		this.exceptionMessage=msg;
	}

	public String getExceptionCode() {
		return exceptionCode;
	}

	public void setExceptionCode(String exceptionCode) {
		this.exceptionCode = exceptionCode;
	}

	public String getExceptionMessage() {
		return exceptionMessage;
	}

	public void setExceptionMessage(String exceptionMessage) {
		this.exceptionMessage = exceptionMessage;
	}
	
}
