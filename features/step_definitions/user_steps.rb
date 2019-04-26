Given /the user is created/ do
  User.create!({
    :email => "joe@gmail.com",
    :password => "123",
    :password_confirmation => "123",
    :firstName => "Oski",
    :lastName => "Bear",
  })
end