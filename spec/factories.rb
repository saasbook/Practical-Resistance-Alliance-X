FactoryBot.define do

    factory :user do
      email {"joe@gmail.com"}
      password {"123"}
      password_confirmation {"123"}
      firstName {"Oski"}
      lastName {"Bear"}
    end
end