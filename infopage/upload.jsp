<%@page import="RssEasy.Core.UploadFileThumbHelper"%><%@page contentType="text/html" pageEncoding="UTF-8"%><%
    response.setHeader("Access-Control-Allow-Origin", "*");
    UploadFileThumbHelper upfile = new UploadFileThumbHelper(pageContext);
    upfile.maxFileSize = 1024 * 1024 * 200;
    upfile.allowUploadFileType = "(?:mp4|png|gif|xls|xlsx|png|jpg|avi|mp3|rm|kux|mpeg-1|apk|doc|docx)$";
    upfile.Upload();
    out.print(upfile.toJson());
%>