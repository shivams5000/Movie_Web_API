SET IDENTITY_INSERT [dbo].[Movies] ON 
GO
INSERT [dbo].[Movies] ([MovieID], [MovieName], [Summary], [Rating], [Director]) VALUES (1, N'The Shawshank Redemption', N'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.', 5, N' Frank Darabont')
GO
INSERT [dbo].[Movies] ([MovieID], [MovieName], [Summary], [Rating], [Director]) VALUES (2, N'Now You See Me', N'The Now You See Me film series, consists of heist thriller films written by Ed Solomon, Boaz Yakin, and Edward Ricourt. The plot centers around the actions of a team of illusionists named The Horsemen who pull off near impossible heists', 5, N' Louis Leterrier, Jon M. Chu, David Gould')
GO
INSERT [dbo].[Movies] ([MovieID], [MovieName], [Summary], [Rating], [Director]) VALUES (4, N'Parasite', N'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', 4, N'Bong Joon-ho')
GO
SET IDENTITY_INSERT [dbo].[Movies] OFF
GO
