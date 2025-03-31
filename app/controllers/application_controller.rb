class ApplicationController < ActionController::Base
  inertia_share do
    {
      flash: { notice: flash.notice, alert: flash.alert },
      current_user: {
        auth: authenticated?&.as_json(
          only: %i[ user_id ],
        ) || {},
      },
    }
  end

  include Authentication
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  around_action :switch_locale

  def switch_locale(&action)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &action)
  end
end
